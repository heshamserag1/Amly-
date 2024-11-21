

// وظائف النافذة المنبثقة للهواتف
var mobileCurrentStep = 1;

var mobileNextBtn = document.getElementById('mobileNextBtn');
var mobileBackBtn = document.getElementById('mobileBackBtn');
var mobileStep1Content = document.getElementById('mobileStep1Content');
var mobileStep2Content = document.getElementById('mobileStep2Content');
var mobileStep3Content = document.getElementById('mobileStep3Content');
var mobileStep4Content = document.getElementById('mobileStep4Content');
var mobileStep5Content = document.getElementById('mobileStep5Content');

var mobileStep1 = document.getElementById('mobileStep1');
var mobileStep2 = document.getElementById('mobileStep2');
var mobileStep3 = document.getElementById('mobileStep3');

var openMobileModalBtn = document.getElementById('openMobileModalBtn');
var mobileAppointmentModal = new bootstrap.Modal(document.getElementById('mobileAppointmentModal'));

  openMobileModalBtn.addEventListener('click', function() {
    mobileAppointmentModal.show();
  });
  var selectedImageContent1;

  function updateMobileStep(step) {
    mobileStep1.classList.remove('active');
    mobileStep2.classList.remove('active');
    mobileStep3.classList.remove('active');


    mobileStep1Content.classList.add('hidden');
    mobileStep2Content.classList.add('hidden');
    mobileStep3Content.classList.add('hidden');
    mobileStep4Content.classList.add('hidden');
    mobileStep5Content.classList.add('hidden');

    

    if (step === 1) {
      mobileStep1.classList.add('active');
      mobileStep1Content.classList.remove('hidden');
      mobileBackBtn.classList.add('hidden');

    } else if (step === 2) {
        if (selectedImageContent1 === 'ordermedicen') {

      mobileStep2.classList.add('active');
      mobileStep2Content.classList.remove('hidden');
      mobileBackBtn.classList.remove('hidden');
    } else if (selectedImageContent1 === 'ordertohome') {
        mobileStep2.classList.add('active');
        mobileStep3Content.classList.remove('hidden');
        mobileBackBtn.classList.remove('hidden');
        mobileNextBtn.innerHTML = "Confirm <span>&gt;</span>";
    
    
        } else if (selectedImageContent1 === 'ordersurgery') {
          mobileStep2.classList.add('active');
          mobileStep4Content.classList.remove('hidden');
          mobileBackBtn.classList.remove('hidden');
        
        }
       else {
        mobileStep2.classList.add('active');
        mobileStep2Content.classList.remove('hidden');
        mobileBackBtn.classList.remove('hidden');
            }
        

    } else if (step === 3) {
      mobileStep3.classList.add('active');
      mobileStep5Content.classList.remove('hidden');
      mobileNextBtn.innerText = 'Confirm';

    }
  }
  mobileBackBtn.addEventListener('click', function() {
    mobileNextBtn.innerText= "Next >";
  
  });
  mobileNextBtn.addEventListener('click', function() {
    if (mobileCurrentStep === 1) {
      mobileCurrentStep++;
      updateMobileStep(mobileCurrentStep);
    }else if (mobileCurrentStep === 2) {
        // إذا كانت الخطوة الثانية، نتحقق من الصورة المحددة
        mobileCurrentStep++;
        updateMobileStep(mobileCurrentStep);
      }
  });

  mobileBackBtn.addEventListener('click', function() {
    if (mobileCurrentStep > 1) {
      mobileCurrentStep--;
      updateMobileStep(mobileCurrentStep);
      mobileNextBtn.innerText = "Next >";
    }
  });
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