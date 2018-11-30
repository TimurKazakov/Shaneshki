
                var mainPhotoDescriptionArray = document.getElementsByClassName("main-photo-description");
                var count = 1;
                for (let i = 0; i <mainPhotoDescriptionArray.length ; i++) {
                    count++;
                    setTimeout(function () {
                        mainPhotoDescriptionArray[i].classList.remove('hidden');

                    }, count* 1000);
                }



