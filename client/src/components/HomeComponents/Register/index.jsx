import React from 'react'
import "./index.scss"
const Register = () => {
  return (
    <section id='register'>
<div className="reg">
  <div className="now">
<div className="content">
  <h3>Register now and get a discount <span>50%</span>  discount until 1 January</h3>
  <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
  <div className="btnn">
    Register now
  </div>
</div>
  </div>
  <div className="search">

<form action="">
  <h3>
Search for your course
</h3>
<input type="text" placeholder='Course Name' />
<input type="text" placeholder='Category' />
<input type="text" placeholder='Degree' />
<div className="btnn">
  Search course
</div>
</form>
  </div>
</div>
    </section>
  )
}

export default Register