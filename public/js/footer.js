/* ==========================================================================
   Author: Jeanclaude Stephane
   Contact: jeanclaude.stephane@hotmail.fr
   ========================================================================== */

function contact(){
				   //footer en developpement
				   const footer = document.getElementById('footer');
				try{
				   if(mail){
					   			const aref=document.createElement('a');
								aref.href=mail;
								aref.target="_blank";
								const mailto=document.createElement('img');
								mailto.src=img_folder+"default/mail.png";
								mailto.alt="mail";
								mailto.title="Mail";
								mailto.id="contactMail";
								mailto.className="iconeContact";
								
								aref.appendChild(mailto);
								footer.appendChild(aref);
								};
					}catch(e){};
				try{
					if(blendswap){
							    const aref=document.createElement('a');
								aref.href=blendswap;
								aref.target="_blank";
								const blend=document.createElement('img');
								blend.src=img_folder+"default/blendswap.png";
								blend.alt="BlendSwap";
								blend.title="BlendSwap";
								blend.id="contactBlendswap";
								blend.className="iconeContact";
								aref.appendChild(blend);
								footer.appendChild(aref);
								};
					}catch(e){};
				try{
					if(artstation){
							    const aref=document.createElement('a');
								aref.href=artstation;
								aref.target="_blank";
								const artsta=document.createElement('img');
								artsta.src=img_folder+"default/artstation.png";
								artsta.alt="Artstation";
								artsta.title="Artstation";
								artsta.id="contactArtstation";
								artsta.className="iconeContact";
								aref.appendChild(artsta);
								footer.appendChild(aref);
								};
					}catch(e){};
				try{
					if(deviantart){
							    const aref=document.createElement('a');
								aref.href=deviantart;
								aref.target="_blank";
								const devia=document.createElement('img');
								devia.src=img_folder+"default/deviantart.png";
								devia.alt="Deviantart";
								devia.title="Deviantart";
								devia.id="contactDeviantart";
								devia.className="iconeContact";
								aref.appendChild(devia);
								footer.appendChild(aref);
								};
					}catch(e){};
				try{
					if(vimeo){
							    const aref=document.createElement('a');
								aref.href=vimeo;
								aref.target="_blank";
								const vim=document.createElement('img');
								vim.src=img_folder+"default/vimeo.png";
								vim.alt="Viméo";
								vim.title="Viméo";
								vim.id="contactVimeo";
								vim.className="iconeContact";
								aref.appendChild(vim);
								footer.appendChild(aref);
								};
					}catch(e){};
				try{
					if(sketchfab){
							    const aref=document.createElement('a');
								aref.href=sketchfab;
								aref.target="_blank";
								const sketch=document.createElement('img');
								sketch.src=img_folder+"default/sketchfab.png";
								sketch.alt="Sketchfab";
								sketch.title="Sketchfab";
								sketch.id="contactSketchfab";
								sketch.className="iconeContact";
								aref.appendChild(sketch);
								footer.appendChild(aref);
								};
					}catch(e){};
				try{
					if(youtube){
							    const aref=document.createElement('a');
								aref.href=youtube;
								aref.target="_blank";
								const yout=document.createElement('img');
								yout.src=img_folder+"default/youtube.png";
								yout.alt="YouTube";
								yout.title="YouTube";
								yout.id="contactYoutube";
								yout.className="iconeContact";
								aref.appendChild(yout);
								footer.appendChild(aref);
								};
					}catch(e){};
				try{
					if(dribbble){
							    const aref=document.createElement('a');
								aref.href=dribbble;
								aref.target="_blank";
								const drib=document.createElement('img');
								drib.src=img_folder+"default/dribbble.png";
								drib.alt="Dribbble";
								drib.title="Dribbble";
								drib.id="contactDribbble";
								drib.className="iconeContact";
								aref.appendChild(drib);
								footer.appendChild(aref);
								
								};
					}catch(e){};
				try{
				   if(facebook){
					   			const aref=document.createElement('a');
								aref.href=facebook;
								aref.target="_blank";
								const face=document.createElement('img');
								face.src=img_folder+"default/facebook.png";
								face.alt="facebook";
								face.title="Facebook";
								face.id="contactFacebook";
								face.className="iconeContact";
								
								aref.appendChild(face);
								footer.appendChild(aref);
								};
					}catch(e){};
				try{
					if(google_plus){
									const aref=document.createElement('a');
									aref.href=google_plus;
									aref.target="_blank";
									const google=document.createElement('img');
									google.src=img_folder+"default/gplus.png";
									google.alt="Google plus";
									google.title="Google +";
									google.id="contactGoogle";
									google.className="iconeContact";
									aref.appendChild(google);
									footer.appendChild(aref);
									};
					}catch(e){};
				try{
					if(flickr){
							   const aref=document.createElement('a');
							   aref.href=flickr;
							   aref.target="_blank";
							   const fck=document.createElement('img');
							   fck.src=img_folder+"default/flickr.png";
							   fck.alt="Flickr";
							   fck.title="Flickr";
							   fck.id="contactFlickr";
							   fck.className="iconeContact";
							   aref.appendChild(fck);
							   footer.appendChild(aref);
							   };
					}catch(e){};
				try{		   
					if(twitter){
							    const aref=document.createElement('a');
								aref.href=twitter;
								aref.target="_blank";
								const twt=document.createElement('img');
								twt.src=img_folder+"default/twitter.png";
								twt.alt="Twitter";
								twt.title="Twitter";
								twt.id="contactTwitter";
								twt.className="iconeContact";
								aref.appendChild(twt);
								footer.appendChild(aref);
								};
					}catch(e){};
				
				
				
				try{
					if(behance){
							    const aref=document.createElement('a');
								aref.href=behance;
								aref.target="_blank";
								const beh=document.createElement('img');
								beh.src=img_folder+"default/behance.png";
								beh.alt="Behance";
								beh.title="Behance";
								beh.id="contactBehance";
								beh.className="iconeContact";
								aref.appendChild(beh);
								footer.appendChild(aref);
								};
					}catch(e){};
				
				try{
					if(linkedin){
							    const aref=document.createElement('a');
								aref.href=linkedin;
								aref.target="_blank";
								const linked=document.createElement('img');
								linked.src=img_folder+"default/linkedin.png";
								linked.alt="Linkedin";
								linked.title="Linkedin";
								linked.id="contactLinkedin";
								linked.className="iconeContact";
								aref.appendChild(linked);
								footer.appendChild(aref);
								};
					}catch(e){};
				
				try{
					if(instagram){
							    const aref=document.createElement('a');
								aref.href=instagram;
								aref.target="_blank";
								const insta=document.createElement('img');
								insta.src=img_folder+"default/instagram.png";
								insta.alt="Instagram";
								insta.title="Instagram";
								insta.id="contactInstagram";
								insta.className="iconeContact";
								aref.appendChild(insta);
								footer.appendChild(aref);
								};
					}catch(e){};
				
					
					};
	contact();


