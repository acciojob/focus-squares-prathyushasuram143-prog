//your JS code here. If required.
<script>
        const boxes=document.querySelectorAll(".square")

        boxes.forEach((box)=>{
			
           box.addEventListener("mouseover",(e)=>{
             console.log(e.target.id)
             changeColor(e.target.id)
           })
			
			box.addEventListener("mouseout",(e)=>{
				boxes.forEach((box)=>{
             box.style.backgroundColor=#E6E6FA;
			})
        })
			function changeColor(hoverRedBoxId){
				boxes.forEach((box)=>{
					if(box.id !== hoverRedBoxId){
						box.style.backgroundcolor=#6F4E37
					}
				})
			}


    </script>