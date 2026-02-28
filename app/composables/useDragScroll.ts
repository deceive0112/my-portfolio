export const useDragScroll = () => {
  const scrollContainer = ref<HTMLDivElement | null>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e: MouseEvent) => {
    isDown = true;
    if (!scrollContainer.value) return;
    startX = e.pageX - scrollContainer.value.offsetLeft;
    scrollLeft = scrollContainer.value.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown = false;
  };
  const onMouseUp = () => {
    isDown = false;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    if (!scrollContainer.value) return;
    const x = e.pageX - scrollContainer.value.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.value.scrollLeft = scrollLeft - walk;
  };

  return { scrollContainer, onMouseDown, onMouseLeave, onMouseUp, onMouseMove };
};
