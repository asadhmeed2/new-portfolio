import React from 'react'
import JavaScriptLogo from '../../images/svgs/javaScriptLogo';
import MongoDBLogo from '../../images/svgs/mongoDBLogo';
import NodejsLogo from '../../images/svgs/nodejsLogo';
import ReactLogo from '../../images/svgs/reactIcon';
import './css/frameworksLogos.style.css'

const FrameworksLogos = () => {


  return (
    <div className="frameworks">
        <JavaScriptLogo height = '200px' width = '200px'/>
        <ReactLogo height = '200px' width = '200px'/>
        <NodejsLogo height = '200px' width = '200px'/>
        <MongoDBLogo height = '200px' width = '200px'/>
    </div>
  )
}

export default FrameworksLogos