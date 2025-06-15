 alert("Welcome to this langing page")
function changeColor() {
  const boxs = document.querySelectorAll('.topic1');
  boxs.forEach(topic1 => {
    topic1.classList.remove('bg-indigo-300');
    topic1.classList.add('bg-red-500');
  });
}

function selectOption(clickedElement) {
  const mnths = document.querySelectorAll('.mnth');
  const mnthhs = document.querySelectorAll('.mnthh');

  mnths.forEach(mnth => {
    if (mnth === clickedElement) {
      if (mnth.classList.contains('zoom-in')) {
        mnth.classList.remove('zoom-in');
        mnth.classList.add('zoom-out');
      } else {
        mnth.classList.remove('zoom-out');
        mnth.classList.add('zoom-in');
      }
    } else {
      mnth.classList.remove('zoom-in');
      mnth.classList.add('zoom-out');
    }
  });

  // Jab mnth zoom-in ho, to sabhi mnthh zoom-out ho jayein
  if (clickedElement.classList.contains('zoom-in')) {
    mnthhs.forEach(mnthh => {
      mnthh.classList.remove('zoom-in');
      mnthh.classList.add('zoom-outt');
    });
  }
  if (clickedElement.classList.contains('zoom-out')) {
      mnthhs.forEach(mnthh => {
        // mnth.classList.remove('zoom-in');
        mnthh.classList.remove('zoom-outt');
        mnthh.classList.add('zoom-out');

      });
    }
}

function selectOption1(clickedElement) {
  const mnthhs = document.querySelectorAll('.mnthh');
  const mnths = document.querySelectorAll('.mnth');

  mnthhs.forEach(mnthh => {
    if (mnthh === clickedElement) {
      if (mnthh.classList.contains('zoom-in')) {
        mnthh.classList.remove('zoom-in');
        mnthh.classList.add('zoom-out');
      } else {
        mnthh.classList.remove('zoom-out');
        mnthh.classList.add('zoom-in');
      }
    } else {
      mnthh.classList.remove('zoom-in');
      mnthh.classList.add('zoom-out');
    }
  });

  // Jab mnthh zoom-in ho, to sabhi mnth zoom-out ho jayein
  if (clickedElement.classList.contains('zoom-in')) {
    mnths.forEach(mnth => {
      mnth.classList.remove('zoom-in');
      mnth.classList.add('zoom-outt');
    });
  }
    if (clickedElement.classList.contains('zoom-out')) {
      mnths.forEach(mnth => {
        // mnth.classList.remove('zoom-in');
        mnth.classList.remove('zoom-outt');
        mnth.classList.add('zoom-out');
      });
  }
}

