 function changeColor() {
    const boxs = document.querySelectorAll('.topic1');
    boxs.forEach(topic1 => {
    topic1.classList.remove('bg-indigo-300');
    topic1.classList.add('bg-red-500');
  });
}