/* SCROLL CLASS CHANGE */

window.onscroll = function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").className = "small";
    } else {
        document.getElementById("header").className = "big";
    }
}


/* GET ELEMENTS */

var modal = document.getElementById("modal");
var close = document.getElementById("close");
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var videoModal = document.getElementById("videoModal");
var videoClose = document.getElementById("videoClose");
var videoOpen = document.getElementById("videoOpen");
var video = document.getElementById("video");

/* CREATE GALLERY */

for (i = 0; i < pictures.length; i++) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = "images/gallery/" + pictures[i];
    img.setAttribute('data-number',i);
    div.appendChild(img);
    if (i < 5) {
        row1.appendChild(div);
    } else {
        row2.appendChild(div);
    }
}


/* ADD GALLERY EVENT LISTENERS */

var imgs = document.querySelectorAll("div#galleryContainer div div img");
var img = document.createElement("img");
var modalPicture;


for (i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
        modal.classList.remove("hidden");
        modal.classList.add("visible");
        img.src = this.src;
        modalPicture = this.getAttribute('data-number');
        modal.appendChild(img);
    }
};


/* VIDEO MODAL ONCLICK */

function showVideo() {
    videoModal.classList.remove("hidden");
    videoModal.classList.add("visible");
}


/* ADD MODAL CLOSE BEHAVIOR */

close.onclick = function () {
    hideModal();
};

videoClose.onclick = function () {
    closeVideoModal();
}

window.onclick = function (event) {
    if (event.target === modal) {
        hideModal();
    } else if (event.target === videoModal) {
        closeVideoModal();
    }
};

function hideModal() {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
}

function closeVideoModal() {
    videoModal.classList.remove("visible");
    videoModal.classList.add("hidden");
    setTimeout(function () {
        video.src = video.src
    }, 600);
}


/* GALLERY HOTKEYS */

document.onkeydown = function (event) {
    if (modal.className == "visible") {
        switch (event.keyCode) {
            case 27:
                hideModal();
                break;
            case 37:
                if (modalPicture < 1) {
                    modalPicture = pictures.length - 1;
                    img.src = "images/gallery/" + pictures[modalPicture];
                } else {
                    modalPicture--;
                    img.src = "images/gallery/" + pictures[modalPicture];
                }
                break;
            case 39:
                if (modalPicture < pictures.length - 1) {
                    modalPicture++;
                    img.src = "images/gallery/" + pictures[modalPicture];
                } else {
                    modalPicture = 0;
                    img.src = "images/gallery/" + pictures[modalPicture];
                }
                break;
        }
    }
}
