import React from 'react'

class Video extends React.Component {
  constructor (props) {
    super(props)
    this.video = props
  }

  vid (a) {
    let json_video; try { json_video = a } catch (e) { json_video = '' };
    const liste = []
    try {
      for (const i in json_video) {
        liste.push(json_video[i])
      };
    } catch (e) { liste.push('') }

    return liste
  }

  render () {
    const path = this.video.props.path + this.video.props.description.path
    const video = this.video.props.description.videos
    const ext1 = '.mp4'
    const ext2 = '.ogg'
    const ext3 = '.webm'
    console.log(video)

    return (
      <div className='videos'>
        {this.vid(video).map((im) => {
          return (
            <video className='video' key={im} controls poster={path + im + '.jpg'}>
              <source id='format_mp4' src={path + im + ext1} type='video/mp4' />
              <source id='format_ogg' src={path + im + ext2} type='video/ogg' />
              <source id='format_webm' src={path + im + ext3} type='video/webm' />
              <p>
                your browser does not support this video
                Ihr Browser unterstützt dieses Video nicht.
              </p>
            </video>
          )
        })}
      </div>
    )
  }
};

export default Video
