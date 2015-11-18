"use strict";

jQuery(document).ready(function () {
        jQuery('a.gallery').colorbox({ transition:"fade", scalePhotos:true,
					scrolling:false, /*overlayClose:true,*/ escKey:true,
					close:"x", maxWidth:"1000px"
					});
            });