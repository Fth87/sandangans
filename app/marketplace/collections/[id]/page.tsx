import { notFound } from 'next/navigation';
import CollectionDetailClient from './detail';
import { getCollectionById } from '../../hooks/collection';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const collection = getCollectionById(params.id);

  if (!collection) {
    return {
      title: 'Collection Not Found | Sandhangans',
      description: "The collection you're looking for doesn't exist.",
    };
  }

  return {
    title: `${collection.title} | Sandhangans`,
    description: collection.description,
  };
}

export default function CollectionDetailPage({ params }: { params: { id: string } }) {
  const collection = getCollectionById(params.id);

  if (!collection) {
    notFound();
  }

  return <CollectionDetailClient collection={collection} />;
}
