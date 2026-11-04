//your JS code here. If required.
<script>
        const boxes=document.querySelectorAll(".box")

        boxes.forEach((box)=>{
           box.addEventListener("mouseover",(e)=>{
             console.log(e.target.id)
             changeColor(e.target.id)
           })
        })
			function changeColor(hoverRedBoxId){
				box.forEach((box)=>{
					if(box.id !== hoverRedBoxId){
						box.style.backgroundcolor: #6F4E37
					}
				})
			}


    </script>