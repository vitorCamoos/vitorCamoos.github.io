            

const scriptURL = 'https://script.google.com/macros/s/AKfycbweaggIew2QagL9_lXIm0cl1mo2fcffmU4Cu3Ix1iOUi2AeKCHT0MiK52lA468pN_s/exec';
                    const form = document.forms['submit-to-google-sheet'];
                    const msg = document.getElementById("msg");
            
                    form.addEventListener('submit', e => {
                        e.preventDefault();
                        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                            .then(response => {
                                msg.innerHTML = "Mensagem enviada com sucesso";
                                setTimeout(function() {
                                    msg.innerHTML = "";
                                }, 5000);
                                form.reset();
                            })
                            .catch(error => console.log('Error!', error.message));
                    });

                    function verificarRecaptcha() {
                        var response = grecaptcha.getResponse();
                      
                        if (response.length === 0) {
                          // O reCAPTCHA não foi marcado
                          alert("Por favor, marque o reCAPTCHA antes de enviar o formulário.");
                          return false;
                        }
                        // O reCAPTCHA foi marcado
                        return true;
                      }
                      
                  