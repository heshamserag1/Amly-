    // reportوظائف النافذة المنبثقة لأجهزة 
    var reportCurrentStep = 1;
    var reportNextBtn = document.getElementById('reportNextBtn');
    var reportBackBtn = document.getElementById('reportBackBtn');
    var reportStep1Content = document.getElementById('reportStep1Content');
    var reportStep2Content = document.getElementById('reportStep2Content');
    var reportStep3Content = document.getElementById('reportStep3Content');
    var reportStep4Content = document.getElementById('reportStep4Content');

    var reportStep1 = document.getElementById('reportStep1');
    var reportStep2 = document.getElementById('reportStep2');
    var reportStep3 = document.getElementById('reportStep3');
    var reportStep4 = document.getElementById('reportStep4');

    var openreportModalBtn2 = document.getElementById('openreportModalBtn2');
    var openreportModalBtn3 = document.getElementById('openreportModalBtn3');
    var openreportModalBtn4 = document.getElementById('openreportModalBtn4');
    var openreportModalBtn5 = document.getElementById('openreportModalBtn5');
    var openreportModalBtn6 = document.getElementById('openreportModalBtn6');
    var openreportModalBtn7 = document.getElementById('openreportModalBtn7');
    var openreportModalBtn8 = document.getElementById('openreportModalBtn8');
    var openreportModalBtn9 = document.getElementById('openreportModalBtn9');
    var openreportModalBtn1 = document.getElementById('openreportModalBtn1');

    var reportAppointmentModal = new bootstrap.Modal(document.getElementById('reportAppointmentModal'));

openreportModalBtn1.addEventListener('click', function() {
    reportAppointmentModal.show();
});
openreportModalBtn2.addEventListener('click', function() {
    reportAppointmentModal.show();
});
openreportModalBtn3.addEventListener('click', function() {
    reportAppointmentModal.show();
});
openreportModalBtn4.addEventListener('click', function() {
    reportAppointmentModal.show();
});
openreportModalBtn5.addEventListener('click', function() {
    reportAppointmentModal.show();
});
openreportModalBtn6.addEventListener('click', function() {
    reportAppointmentModal.show();
});
openreportModalBtn7.addEventListener('click', function() {
    reportAppointmentModal.show();
});
openreportModalBtn8.addEventListener('click', function() {
    reportAppointmentModal.show();
});
openreportModalBtn9.addEventListener('click', function() {
    reportAppointmentModal.show();
});
function updatereportStep(step) {
    reportStep1.classList.remove('active');
  reportStep2.classList.remove('active');
  reportStep3.classList.remove('active');
  reportStep4.classList.remove('active');


  reportStep1Content.classList.add('hidden');
  reportStep2Content.classList.add('hidden');
  reportStep3Content.classList.add('hidden');
  reportStep4Content.classList.add('hidden');

  if (step === 1) {
    reportStep1.classList.add('active');
    reportStep1Content.classList.remove('hidden');
    reportBackBtn.classList.add('hidden');
  } else if (step === 2) {
    reportStep2.classList.add('active');
    reportStep2Content.classList.remove('hidden');
    reportBackBtn.classList.remove('hidden');
  } else if (step === 3) {
    reportStep3.classList.add('active');
    reportStep3Content.classList.remove('hidden');
    reportBackBtn.classList.remove('hidden');
    reportNextBtn.innerText = 'Checkout';
  } 
  else if (step === 4) {
    reportStep4.classList.add('active');
    reportStep4Content.classList.remove('hidden');
    reportNextBtn.innerText = 'Confirm';
  } 
  
}

reportNextBtn.addEventListener('click', function() {
  if (reportCurrentStep < 4) {
    reportCurrentStep++;
    updatereportStep(reportCurrentStep);
  }
});

reportBackBtn.addEventListener('click', function() {
  if (reportCurrentStep > 1) {
    reportCurrentStep--;
    updatereportStep(reportCurrentStep);
    reportNextBtn.innerText.innerText = "Confirm";
  }
});
