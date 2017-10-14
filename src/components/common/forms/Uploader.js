import React from 'react';
import {Pic} from './Pic';
import {connect} from 'react-redux';

class Uploader extends React.Component{

    state = {
      user:{},
        images:[],
        archivos:[]
    };

    componentWillReceiveProps(nP){
        //console.log("recibi");
        this.setState({
            user:nP.user,
            images:nP.images
        });
    }

    onUploadImage = (e) => {
        //if(/\.(jpe?g|png|gif)$/i.test("file.name")) return;
        let archivos = this.state.archivos;
        if(e.target.files.length > 10) return alert("no puedes subir mas de 10 archivos");
        //let reader = new FileReader();
        const images = this.state.images;
        const files = e.target.files;
        for(let k in files){
            if(typeof files[k] === typeof {}){
                let blob = [files[k]];
                let url = URL.createObjectURL(new Blob(blob));
                images.push({file:files[k], url});
                //amontonamos los archivos:
                //archivos.push(files[k]);
            }


        }
        this.setState({images, archivos});
        //Mandamos las imagenes al contenedor
        this.props.getImages(images);
    };

    onRemoveImage = (url) => {
        const images = this.state.images;
        const nuevaLista =  images.filter(link=>link.url !== url);
        this.setState({images:nuevaLista});
        //actualizamos el contenedor
        this.props.getImages(nuevaLista);
    };

    render(){
        const {images} = this.state;
        //console.log(this.state.images);
        return(
            <div style={styles.flexContainer}>
                {images.map((i,index)=>{
                    return (<Pic
                        key={index}
                        url={i.url}
                        onClickRemove={this.onRemoveImage}
                    />);
                })}
                {images.length < 10 && <Pic
                    onClickUpload={this.onUploadImage}

                />}
            </div>

        );
    }
}

const styles = {
    flexContainer:{
        display:"flex",
        flexWrap:"wrap"
    }
};

function mapStateToProps(state, ownProps){
    return{
    }
}
function mapDispatchToProps(dispatch){
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);