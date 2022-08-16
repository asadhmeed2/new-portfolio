import React, { useEffect, useState } from 'react'
import JavaScriptLogo from '../../images/svgs/javaScriptLogo';
import MongoDBLogo from '../../images/svgs/mongoDBLogo';
import NodejsLogo from '../../images/svgs/nodejsLogo';
import ReactLogo from '../../images/svgs/reactIcon';
import './css/frameworksLogos.style.css'

const FrameworksLogos = () => {

    const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  let size = windowSize.innerWidth < 755 ? '100px':windowSize.innerWidth > 755 && windowSize.innerWidth < 1400? '14vw': '200px';

  return (
    <div className="frameworks">
        <JavaScriptLogo height = {size} width = {size}/>
        <ReactLogo height = {size} width = {size}/>
        <NodejsLogo height = {size} width = {size}/>
        <MongoDBLogo height = {size} width = {size}/>
    </div>
  )
}

function getWindowSize() {
    const {innerWidth} = window;
    return {innerWidth};
  }

export default FrameworksLogos