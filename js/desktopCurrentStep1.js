       // 1وظائف النافذة المنبثقة لأجهزة سطح المكتب
  var desktopCurrentStep1 = 1;
  var desktopNextBtn1 = document.getElementById('desktopNextBtn1');
  var desktopBackBtn1 = document.getElementById('desktopBackBtn1');
  var desktopStep11Content = document.getElementById('desktopStep11Content');
  var desktopStep12Content = document.getElementById('desktopStep12Content');
  var desktopStep13Content = document.getElementById('desktopStep13Content');
  var desktopStep14Content = document.getElementById('desktopStep14Content');
  var desktopStep15Content = document.getElementById('desktopStep15Content');
  
  var desktopStep11 = document.getElementById('desktopStep11');
  var desktopStep12 = document.getElementById('desktopStep12');
  var desktopStep13 = document.getElementById('desktopStep13');
  
  var openDesktopModalBtn1 = document.getElementById('openDesktopModalBtn1');
  var desktopAppointmentModal1 = new bootstrap.Modal(document.getElementById('desktopAppointmentModal1'));
  
  openDesktopModalBtn1.addEventListener('click', function() {
    desktopAppointmentModal1.show();
  });
  
  var selectedImageContent1;
  
  function updateDesktopStep1(step) {
    desktopStep11.classList.remove('active');
    desktopStep12.classList.remove('active');
    desktopStep13.classList.remove('active');
  
    desktopStep11Content.classList.add('hidden');
    desktopStep12Content.classList.add('hidden');
    desktopStep13Content.classList.add('hidden');
    desktopStep14Content.classList.add('hidden');
    desktopStep15Content.classList.add('hidden');
  
    if (step === 1) {
      desktopStep11.classList.add('active');
      desktopStep11Content.classList.remove('hidden');
      desktopBackBtn1.classList.add('hidden');
      document.getElementById("myElement").style.display = "none"; // أو "inline" حسب الحاجة
    } else if (step === 2) {
      // هنا نعرض المحتوى المناسب بناءً على الصورة المحددة
      if (selectedImageContent1 === 'ordermedicen') {
        document.getElementById("myElement").style.display = "none"; // أو "inline" حسب الحاجة
        desktopStep12.classList.add('active');
      desktopStep12Content.classList.remove('hidden');
      desktopBackBtn1.classList.remove('hidden');
          } else if (selectedImageContent1 === 'ordertohome') {
      
            desktopStep12.classList.add('active');
      desktopStep13Content.classList.remove('hidden');
      desktopBackBtn1.classList.remove('hidden');
      document.getElementById("myElement").style.display = "block"; // أو "inline" حسب الحاجة
      desktopNextBtn1.innerHTML = "Confirm <span style='margin-left: 3px;'>&gt;</span>";
  
  
      } else if (selectedImageContent1 === 'ordersurgery') {
        document.getElementById("myElement").style.display = "block"; // أو "inline" حسب الحاجة
      desktopStep12.classList.add('active');
      desktopStep14Content.classList.remove('hidden');
      desktopBackBtn1.classList.remove('hidden');
      
      }
     else {
      document.getElementById("myElement").style.display = "none"; // أو "inline" حسب الحاجة
      desktopStep12.classList.add('active');
    desktopStep12Content.classList.remove('hidden');
    desktopBackBtn1.classList.remove('hidden');
          }
      
    } else if (step === 3) {
      document.getElementById("myElement").style.display = "none"; // أو "inline" حسب الحاجة
      desktopStep13.classList.add('active');
      desktopStep15Content.classList.remove('hidden');
      desktopNextBtn1.innerText = 'Confirm';
    }
  }
  desktopBackBtn1.addEventListener('click', function() {
    desktopNextBtn1.innerText= "Next   >";
    document.getElementById("myElement").style.display = "none"; // أو "inline" حسب الحاجة
  
  });
  
  desktopNextBtn1.addEventListener('click', function() {
    if (desktopCurrentStep1 === 1) {
      desktopCurrentStep1++;
      updateDesktopStep1(desktopCurrentStep1);
    } else if (desktopCurrentStep1 === 2) {
      // إذا كانت الخطوة الثانية، نتحقق من الصورة المحددة
      desktopCurrentStep1++;
      updateDesktopStep1(desktopCurrentStep1);
    }
  });
  
  desktopBackBtn1.addEventListener('click', function() {
    if (desktopCurrentStep1 > 1) {
      desktopCurrentStep1--;
      updateDesktopStep1(desktopCurrentStep1);
    }
  });
  
  // وظيفة لاختيار الصورة
  function selectImage(image) {
    // تعيين المحتوى المختار
    if (image.src.includes('ordermedicen.png')) {
      selectedImageContent1 = 'ordermedicen';
    } else if (image.src.includes('ordertohome.png')) {
      selectedImageContent1 = 'ordertohome';
    } else if (image.src.includes('ordersurgery.png')) {
      selectedImageContent1 = 'ordersurgery';
    }
  }
  