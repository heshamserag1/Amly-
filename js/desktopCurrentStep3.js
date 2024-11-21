
    // 3وظائف النافذة المنبثقة لأجهزة سطح المكتب
    var desktopCurrentStep3 = 1;
    var desktopNextBtn3 = document.getElementById('desktopNextBtn3');
    var desktopBackBtn3 = document.getElementById('desktopBackBtn3');
    var desktopStep31Content = document.getElementById('desktopStep31Content');
    var desktopStep32Content = document.getElementById('desktopStep32Content');
    var desktopStep33Content = document.getElementById('desktopStep33Content');
    var desktopStep34Content = document.getElementById('desktopStep34Content');
    var desktopStep35Content = document.getElementById('desktopStep35Content');

    var desktopStep31 = document.getElementById('desktopStep31');
    var desktopStep32 = document.getElementById('desktopStep32');
    var desktopStep33 = document.getElementById('desktopStep33');
    var desktopStep34 = document.getElementById('desktopStep34');
    var desktopStep35 = document.getElementById('desktopStep35');

    var openDesktopModalBtn3 = document.getElementById('openDesktopModalBtn3');
    var desktopAppointmentModal3 = new bootstrap.Modal(document.getElementById('desktopAppointmentModal3'));

openDesktopModalBtn3.addEventListener('click', function() {
  desktopAppointmentModal3.show();
});

function updateDesktopStep3(step) {
  desktopStep31.classList.remove('active');
  desktopStep32.classList.remove('active');
  desktopStep33.classList.remove('active');
  desktopStep34.classList.remove('active');
  desktopStep35.classList.remove('active');


  desktopStep31Content.classList.add('hidden');
  desktopStep32Content.classList.add('hidden');
  desktopStep33Content.classList.add('hidden');
  desktopStep34Content.classList.add('hidden');
  desktopStep35Content.classList.add('hidden');

  if (step === 1) {
    desktopStep31.classList.add('active');
    desktopStep31Content.classList.remove('hidden');
    desktopBackBtn3.classList.add('hidden');
  } else if (step === 2) {
    desktopStep32.classList.add('active');
    desktopStep32Content.classList.remove('hidden');
    desktopBackBtn3.classList.remove('hidden');
  } else if (step === 3) {
    desktopStep33.classList.add('active');
    desktopStep33Content.classList.remove('hidden');
    desktopBackBtn3.classList.remove('hidden');
  } 
  else if (step === 4) {
    desktopStep34.classList.add('active');
    desktopStep34Content.classList.remove('hidden');
    desktopBackBtn3.classList.remove('hidden');
  } 
   else if (step === 5) {
    desktopStep35.classList.add('active');
    desktopStep35Content.classList.remove('hidden');
    desktopNextBtn3.innerText = 'Confirm';
  }
}

desktopNextBtn3.addEventListener('click', function() {
  if (desktopCurrentStep3 < 5) {
    desktopCurrentStep3++;
    updateDesktopStep3(desktopCurrentStep3);
  }
});

desktopBackBtn3.addEventListener('click', function() {
  if (desktopCurrentStep3 > 1) {
    desktopCurrentStep3--;
    updateDesktopStep3(desktopCurrentStep3);
    desktopNextBtn3.innerText.innerText = "Next  >";
  }
});