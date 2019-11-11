<template>
  <div class="task-images">
    <label :for="uniqueId">+</label>
    <input :id="uniqueId" type="file" @change="uploadImage" multiple>
    <img
      v-for="(image, i) in images"
      :key="i"
      :src="image"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TaskImages',
  model: {
    prop: 'images',
    event: 'change'
  },
  data() {
    return {
      attachment: [],
      imageData: new  FormData(),
      selectedFile: [] 
    }
  },
  props: {
   images: Array,
   id : [String,Number]
  },
  computed: {
    uniqueId () {
      return 'images_' + this._uid
    }
  },
   methods: {
    ...mapActions('tasks', [
      'saveTask',
      'saveImage'
    ]),
    uploadImage (e) {
    let selectedFile = e.target.files
    this.imageData.append('name', 'my-picture');
    this.imageData.append('file', selectedFile);
     if(!selectedFile.length){
       return false
     }
     for(let i=0; i<selectedFile.length;i++){
      this.attachment.push(selectedFile[i])
      this.images.push(URL.createObjectURL(selectedFile[i]))
     } 
     this.saveImages()
     this.saveTaskImage()
     },
    saveTaskImage () {
       this.saveTask({
        id: this.id,
        images: this.images
       })
    },
    saveImages () {
       this.saveImage({
        images: this.imageData
       })
    },
  }
}
</script>

<style lang="scss" scoped>
.task-images {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
}

img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

img + img {
  margin-left: 6px;
}

label {
  width: 100px;
  height: 100px;
  border: dashed 1px #000;
  font-size: 40px;
  text-align: center;
  line-height: 98px;
  cursor: pointer;
  opacity: .5;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
}

img + label {
  margin-left: 6px;
}

input[type=file] {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
}
</style>
