'use client';

import type React from 'react';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Plus, X, Upload } from 'lucide-react';
import { FormData } from '../contribute-form';

interface ItemDetailsFormProps {
  items: FormData['items'];
  updateItems: (items: FormData['items']) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function ItemDetailsForm({ items, updateItems, onNext, onBack }: ItemDetailsFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const itemTypes = ['Outerwear', 'Tops', 'Bottoms', 'Dresses', 'Accessories', 'Other'];

  const fabricTypes = ['Cotton', 'Polyester', 'Linen', 'Wool', 'Denim', 'Synthetic Blend', 'Other'];

  const conditionTypes = ['Like New', 'Good (Minor Wear)', 'Fair (Visible Signs of Use)', 'Poor (Significant Wear)'];

  const handleItemChange = (index: number, field: string, value: any) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };
    updateItems(updatedItems);

    // Clear error when user makes a change
    if (errors[`item${index}_${field}`]) {
      setErrors({ ...errors, [`item${index}_${field}`]: '' });
    }
  };

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`,
      type: '',
      fabricComposition: '',
      condition: '',
      quantity: 1,
      images: [],
    };
    updateItems([...items, newItem]);
    setActiveItemIndex(items.length);
  };

  const removeItem = (index: number) => {
    if (items.length === 1) {
      return; // Don't remove the last item
    }

    const updatedItems = items.filter((_, i) => i !== index);
    // Rename items to keep sequential naming
    const renamedItems = updatedItems.map((item, i) => ({
      ...item,
      id: i + 1,
      name: `Item ${i + 1}`,
    }));

    updateItems(renamedItems);

    // Adjust active index if needed
    if (activeItemIndex >= index && activeItemIndex > 0) {
      setActiveItemIndex(activeItemIndex - 1);
    }
  };

  const handleImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      images: [...updatedItems[index].images, ...newImages],
    };
    updateItems(updatedItems);
  };

  const removeImage = (itemIndex: number, imageIndex: number) => {
    const updatedItems = [...items];
    updatedItems[itemIndex].images = updatedItems[itemIndex].images.filter((_, i) => i !== imageIndex);
    updateItems(updatedItems);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    items.forEach((item, index) => {
      if (!item.type) {
        newErrors[`item${index}_type`] = 'Item type is required';
      }

      if (!item.fabricComposition) {
        newErrors[`item${index}_fabricComposition`] = 'Fabric composition is required';
      }

      if (!item.condition) {
        newErrors[`item${index}_condition`] = 'Condition is required';
      }

      if (item.quantity <= 0) {
        newErrors[`item${index}_quantity`] = 'Quantity must be at least 1';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-brown-900 mb-6">Item Details</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Item Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveItemIndex(index)}
              className={`px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-2 whitespace-nowrap ${activeItemIndex === index ? 'bg-brown-800 text-white' : 'bg-gray-100 text-brown-800 hover:bg-gray-200'}`}
            >
              <span>{item.name}</span>
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeItem(index);
                  }}
                  className="ml-2 text-xs rounded-full p-1 hover:bg-red-500 hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </motion.div>
          ))}

          <motion.button type="button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={addItem} className="px-3 py-2 rounded-md bg-gray-100 text-brown-800 hover:bg-gray-200 flex items-center">
            <Plus size={16} />
            <span className="ml-1">Add Item</span>
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeItemIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`item-type-${activeItemIndex}`}>Item Type</Label>
                <Select value={items[activeItemIndex].type} onValueChange={(value) => handleItemChange(activeItemIndex, 'type', value)}>
                  <SelectTrigger id={`item-type-${activeItemIndex}`} className={`border-brown-300 w-full ${errors[`item${activeItemIndex}_type`] ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select item type" />
                  </SelectTrigger>
                  <SelectContent className="bg-brown-50">
                    {itemTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors[`item${activeItemIndex}_type`] && <p className="text-red-500 text-xs mt-1">{errors[`item${activeItemIndex}_type`]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`fabric-composition-${activeItemIndex}`}>Fabric Composition</Label>
                <Select value={items[activeItemIndex].fabricComposition} onValueChange={(value) => handleItemChange(activeItemIndex, 'fabricComposition', value)}>
                  <SelectTrigger id={`fabric-composition-${activeItemIndex}`} className={`border-brown-300 w-full ${errors[`item${activeItemIndex}_fabricComposition`] ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select fabric composition" />
                  </SelectTrigger>
                  <SelectContent className="bg-brown-50">
                    {fabricTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors[`item${activeItemIndex}_fabricComposition`] && <p className="text-red-500 text-xs mt-1">{errors[`item${activeItemIndex}_fabricComposition`]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`condition-${activeItemIndex}`}>Condition</Label>
                <Select value={items[activeItemIndex].condition} onValueChange={(value) => handleItemChange(activeItemIndex, 'condition', value)}>
                  <SelectTrigger id={`condition-${activeItemIndex}`} className={`border-brown-300 w-full ${errors[`item${activeItemIndex}_condition`] ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select item condition" />
                  </SelectTrigger>
                  <SelectContent className="bg-brown-50">
                    {conditionTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors[`item${activeItemIndex}_condition`] && <p className="text-red-500 text-xs mt-1">{errors[`item${activeItemIndex}_condition`]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`quantity-${activeItemIndex}`}>Quantity</Label>
                <Input
                  id={`quantity-${activeItemIndex}`}
                  type="number"
                  min="1"
                  value={items[activeItemIndex].quantity}
                  onChange={(e) => handleItemChange(activeItemIndex, 'quantity', Number.parseInt(e.target.value) || 0)}
                  className={`border-brown-300 ${errors[`item${activeItemIndex}_quantity`] ? 'border-red-500' : ''}`}
                />
                {errors[`item${activeItemIndex}_quantity`] && <p className="text-red-500 text-xs mt-1">{errors[`item${activeItemIndex}_quantity`]}</p>}
              </div>
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <Label>Images</Label>
              <div className="grid grid-cols-4 gap-2">
                {items[activeItemIndex].images.map((image, imageIndex) => (
                  <div key={imageIndex} className="relative group">
                    <img src={image || '/placeholder.svg'} alt={`Item ${activeItemIndex + 1} image ${imageIndex + 1}`} className="w-full h-24 object-cover rounded-md border border-gray-300" />
                    <button type="button" onClick={() => removeImage(activeItemIndex, imageIndex)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <X size={14} />
                    </button>
                  </div>
                ))}

                {items[activeItemIndex].images.length < 3 && (
                  <label className="w-full h-24 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <Upload size={24} className="text-gray-400" />
                    <span className="text-xs text-gray-500 mt-1">Upload Image</span>
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(activeItemIndex, e)} />
                  </label>
                )}
              </div>
              <p className="text-xs text-gray-500">Upload up to 3 images of your item. Clear photos help us assess the condition.</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="pt-4 flex justify-end space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="button" variant="outline" onClick={onBack} className="border-brown-800 text-brown-800 hover:bg-brown-50">
              Back
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" className="bg-brown-800 hover:bg-brown-900 text-white px-8">
              Next
            </Button>
          </motion.div>
        </div>
      </form>
    </div>
  );
}
