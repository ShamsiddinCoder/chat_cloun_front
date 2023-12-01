export default function SizeImages (files) {
    const reader = new FileReader();
    reader.readAsDataURL(files);
    const promis = new Promise((resolve, reject) => {
        reader.onload = function(e) {
            let img = new Image();
            img.src = e.target.result;
            img.onload = function(){
                let pos = '';
                if(this.width > this.height){
                    pos = 'width';
                }else {
                    pos = 'height';
                }

                resolve({
                    position: pos,
                    width: this.width,
                    height: this.height
                });
                
            }
            img.onerror = reject;
        };
    });

    return promis;
};