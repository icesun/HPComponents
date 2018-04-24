import React from 'react'

import HPText from './HPText'
import { createKey } from './Tools'



export default class RenderComponents extends React.Component {


    render() {
        console.log('RenderComponents', this.props);

        var components = this.props.components;
        var data = this.props.data;    

        var renderComponents = components.map((component, i) => {
            var key = createKey(component, i);
            console.log('comp', component, key);

            switch(component.type) {
                case 'HPText':
                    return (
                        <HPText key={key} meta={component} />
                    );
            }



        });

        return (
            <div> {renderComponents} </div>
        )
    }

}
