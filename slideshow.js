var slideshow =  {
	photolist: ["pic1","pic2", "pic3"],
	currentPhotoIndex: 0,
	nextPhoto: function(){
		if (this.currentPhotoIndex < this.photolist.length){
		console.log(this.photolist[this.currentPhotoIndex]);
		this.currentPhotoIndex += 1;
		} else {
			console.log("end of slideshow");
		}
	},
	prevPhoto: function(){
​
		if (this.currentPhotoIndex >= 0){
		console.log(this.photolist[this.currentPhotoIndex]);
		this.currentPhotoIndex -= 1;
		} else {
			console.log("beginning of slideshow");
		}
	}
​
}
​
slideshow.nextPhoto()
slideshow.nextPhoto()
slideshow.nextPhoto()
slideshow.prevPhoto()
