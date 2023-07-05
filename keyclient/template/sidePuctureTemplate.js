const sidePictureTemplate = document.createElement("template");

sidePictureTemplate.innerHTML = ` 
 <div class="side-pictures__column">
<div class="side-pictures__picture">
  <img
    class="side-picture__icon"
    src=""
    alt="side-picture__icon"
    data-icon=""
  />
</div>
</div>`;

export default sidePictureTemplate;
