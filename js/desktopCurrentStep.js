

    // 3وظائف النافذة المنبثقة لأجهزة سطح المكتب
    var desktopCurrentStep = 1;
    var desktopNextBtn = document.getElementById('desktopNextBtn');
    var desktopBackBtn = document.getElementById('desktopBackBtn');
    var desktopStep1Content = document.getElementById('desktopStep1Content');
    var desktopStep2Content = document.getElementById('desktopStep2Content');
    var desktopStep3Content = document.getElementById('desktopStep3Content');
    var desktopStep4Content = document.getElementById('desktopStep4Content');
    var desktopStep5Content = document.getElementById('desktopStep5Content');

    var desktopStep1 = document.getElementById('desktopStep1');
    var desktopStep2 = document.getElementById('desktopStep2');
    var desktopStep3 = document.getElementById('desktopStep3');
    var desktopStep4 = document.getElementById('desktopStep4');
    var desktopStep5 = document.getElementById('desktopStep5');

    var openDesktopModalBtn = document.getElementById('openDesktopModalBtn');
    var desktopAppointmentModal = new bootstrap.Modal(document.getElementById('desktopAppointmentModal'));

openDesktopModalBtn.addEventListener('click', function() {
  desktopAppointmentModal.show();
});

function updateDesktopStep(step) {
  desktopStep1.classList.remove('active');
  desktopStep2.classList.remove('active');
  desktopStep3.classList.remove('active');
  desktopStep4.classList.remove('active');
  desktopStep5.classList.remove('active');


  desktopStep1Content.classList.add('hidden');
  desktopStep2Content.classList.add('hidden');
  desktopStep3Content.classList.add('hidden');
  desktopStep4Content.classList.add('hidden');
  desktopStep5Content.classList.add('hidden');

  if (step === 1) {
    desktopStep1.classList.add('active');
    desktopStep1Content.classList.remove('hidden');
    desktopBackBtn.classList.add('hidden');
  } else if (step === 2) {
    desktopStep2.classList.add('active');
    desktopStep2Content.classList.remove('hidden');
    desktopBackBtn.classList.remove('hidden');
  } else if (step === 3) {
    desktopStep3.classList.add('active');
    desktopStep3Content.classList.remove('hidden');
    desktopBackBtn.classList.remove('hidden');
  } 
  else if (step === 4) {
    desktopStep4.classList.add('active');
    desktopStep4Content.classList.remove('hidden');
    desktopBackBtn.classList.remove('hidden');
  } 
   else if (step === 5) {
    desktopStep5.classList.add('active');
    desktopStep5Content.classList.remove('hidden');
    desktopNextBtn.innerText = 'Confirm';
  }
}

desktopNextBtn.addEventListener('click', function() {
  if (desktopCurrentStep < 5) {
    desktopCurrentStep++;
    updateDesktopStep(desktopCurrentStep);
  }
});

desktopBackBtn.addEventListener('click', function() {
  if (desktopCurrentStep > 1) {
    desktopCurrentStep--;
    updateDesktopStep(desktopCurrentStep);
    desktopNextBtn.innerText.innerText = "Next  >";
  }
});
