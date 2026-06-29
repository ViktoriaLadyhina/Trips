export const prepareEntityBlocks = (blocks = []) => {
  const sortedBlocks = [...blocks].sort(
    (a, b) => a.sort_order - b.sort_order
  );

  const langData = sortedBlocks.reduce((acc, block) => {
    acc[block.block_key] = block.content;
    return acc;
  }, {});

  return {
    blocks: sortedBlocks,
    langData
  };
};


export const getEntityName = (entity) =>
  entity.blocks?.find(
    block => block.block_key === "name"
  )?.content || "";

  