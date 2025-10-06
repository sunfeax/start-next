import React from 'react';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params
  return (
    <div>My Post: {productId}</div>
  );
}