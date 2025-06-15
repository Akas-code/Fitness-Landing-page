//  alert("Welcome to this langing page")
 function changeColor() {
    const boxs = document.querySelectorAll('.topic1');
    boxs.forEach(topic1 => {
    topic1.classList.remove('bg-indigo-300');
    topic1.classList.add('bg-red-500');
  });
}
function selectOption(clickedElement) {
  const options = document.querySelectorAll('.mnth');
   

  options.forEach(mnth => {
    if (mnth === clickedElement) {

      // Agar clicked element already zoom-in hai to toggle to zoom-out
      if (mnth.classList.contains('zoom-in')) {
        mnth.classList.remove('zoom-in');
        mnth.classList.add('zoom-out');
                
      } else {
        mnth.classList.remove('zoom-out');
        mnth.classList.add('zoom-in');
      }
    } else {
      // Baaki sab se zoom-in hatao aur zoom-out lagao
      mnth.classList.remove('zoom-in');
      mnth.classList.add('zoom-out');
    }
  });
}
function selectOption1(clickedElement) {
  const optionss = document.querySelectorAll('.mnthh');

  optionss.forEach(mnthh => {
    if (mnthh === clickedElement) {
      // Agar clicked element already zoom-in hai to toggle to zoom-out
      if (mnthh.classList.contains('zoom-in')) {
        mnthh.classList.remove('zoom-in');
        mnthh.classList.add('zoom-out');
      } else {
        mnthh.classList.remove('zoom-out');
        mnthh.classList.add('zoom-in');
      }
    } else {
      // Baaki sab se zoom-in hatao aur zoom-out lagao
      mnthh.classList.remove('zoom-in');
      mnthh.classList.add('zoom-out');
    }
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
      mnth.classList.add('zoom-out');
    });
  }
}
