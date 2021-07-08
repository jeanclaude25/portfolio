import React from 'react'
import Video from './Video'

class Description extends React.Component {
  title (a) { console.log(a); let title; try { title = a.name } catch (e) { title = '' };return title }
  info (a) { let infos; try { infos = a.description.infos } catch (e) { infos = '' };return infos }
  images (a) {
    let images; try { images = a.description.images } catch (e) { images = '' };
    const liste = []
    try {
      for (const i in images) {
        liste.push(images[i])
      };
    } catch (e) { liste.push('') }

    return liste
  }

  imagesfree (a) {
    let images; try { images = a.description.imfreeext } catch (e) { images = '' };
    const liste = []
    try {
      for (const i in images) {
        liste.push(images[i])
      };
    } catch (e) { liste.push('') }

    return liste
  }

  render () {
    const activeElement = this.props.props
    console.log(activeElement.description.videos)
    return (
      <div className='description' id='desc_panel'>

        <div className='title'><h1>{this.title(activeElement)}</h1></div>
        <div className='explication'><p>{this.info(activeElement)}</p></div>
        <hr />
        <div className='images'>
          {this.images(activeElement).map((im) => {
            return (

              <img
                alt={activeElement.name}
                src={activeElement.path +
                            activeElement.description.path +
                            im +
                            activeElement.description.extension} key={im}
              />
            )
          })}
        </div>
        <div className='imagesFreeExt'>
          {this.imagesfree(activeElement).map((imfree) => {
            return (

              <img
                alt={activeElement.name} src={activeElement.path +
                            activeElement.description.path +
                            imfree} key={imfree}
              />
            )
          })}
        </div>

        {activeElement.description.videos && <Video props={activeElement} key={activeElement.videos} />}
        {/* {activeElement.description.gifs && } */}
        <p>.</p><p />

        {activeElement.link !== undefined && <a href={activeElement.path + activeElement.link} target='viewer'><img alt={activeElement.name} src={activeElement.path + activeElement.imgApp} key={activeElement.imgApp} /></a>}
        {/* {activeElement.link==undefined && <img src= {activeElement.img} />} */}

        {/* <iframe src={activeElement.link} sandbox=''/> */}

        {/* <div className="button" id="button_L" onClick={()=> press_on_left()}></div>
                <div className="button" id="button_R" onClick={()=> press_on_right()}></div> */}

      </div>
    )
  };
};

export default Description
