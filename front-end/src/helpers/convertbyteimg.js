export default function convertImage(img){

		const base64String = btoa(String.fromCharCode(...new Uint8Array(img)));
		return base64String

}

