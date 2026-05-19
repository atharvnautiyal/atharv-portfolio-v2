
import { motion } from "framer-motion";

export default function App(){
return(
<div>

<section className="hero">
<div>
<h1 style={{fontSize:"72px",fontWeight:"900",marginBottom:"20px"}}>
Atharv Nautiyal
</h1>

<p style={{maxWidth:"700px",margin:"auto",fontSize:"20px",color:"#cbd5e1"}}>
Software Engineer focused on AI systems, semantic search, backend engineering,
and scalable machine learning applications.
</p>

<div style={{marginTop:"40px",display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
<a className="btn" href="https://github.com/atharvnautiyal">GitHub</a>
<a className="btn" href="https://www.linkedin.com/in/atharv-nautiyal/">LinkedIn</a>
</div>
</div>
</section>

<section className="section">
<h2 style={{fontSize:"42px"}}>Internship Experience</h2>

<div className="card" style={{marginTop:"30px"}}>
<h3 style={{fontSize:"28px"}}>Software Development Intern — NDTV</h3>

<p style={{color:"#cbd5e1",lineHeight:"1.8"}}>
Worked on backend systems and broadcast workflow automation using ASP.NET, C#, SQL,
and VBScript. Designed dynamic broadcast templates and VizRT graphics for production pipelines.
</p>

<p style={{marginTop:"20px",color:"#f59e0b"}}>
June 2025 — July 2025
</p>
</div>
</section>

<section className="section">
<h2 style={{fontSize:"42px"}}>Featured Projects</h2>

<div className="grid" style={{marginTop:"40px"}}>

<motion.div whileHover={{y:-8}} className="card">
<h3 style={{fontSize:"30px"}}>CAREM — Maternal Risk Prediction</h3>

<p style={{color:"#cbd5e1"}}>
AI-powered healthcare platform for maternal risk prediction with continuity analysis and patient history tracking.
</p>

<div style={{marginTop:"24px"}}>
<img src="/carem1.png"/>
</div>

<div style={{marginTop:"18px"}}>
<img src="/carem2.png"/>
</div>

<div style={{marginTop:"18px"}}>
<img src="/carem3.png"/>
</div>

</motion.div>

<motion.div whileHover={{y:-8}} className="card">
<h3 style={{fontSize:"30px"}}>Semantic Product Search</h3>

<p style={{color:"#cbd5e1"}}>
Vector-search based semantic retrieval engine using Sentence-BERT embeddings and FAISS similarity search.
</p>

<div style={{marginTop:"24px"}}>
<img src="/semantic.png"/>
</div>

</motion.div>

</div>
</section>

<section className="section">
<h2 style={{fontSize:"42px"}}>Skills</h2>

<div style={{display:"flex",gap:"14px",flexWrap:"wrap",marginTop:"30px"}}>
{["Python","SQL","FastAPI","FAISS","Machine Learning","Scikit-Learn","Pandas","MySQL"].map(skill=>(
<div key={skill} className="card">{skill}</div>
))}
</div>
</section>

<section className="section" style={{textAlign:"center"}}>
<h2 style={{fontSize:"42px"}}>Contact</h2>

<p style={{color:"#cbd5e1",marginTop:"20px"}}>
Open to software engineering internships and AI-focused opportunities.
</p>

<div style={{marginTop:"30px"}}>
<a className="btn" href="mailto:work.atharvnautiyal@gmail.com">
Contact Me
</a>
</div>
</section>

</div>
)
}
