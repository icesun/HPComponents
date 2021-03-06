import React from 'react'

import HPText from './HPText'
import HPTextarea from './HPTextarea'
import HPTable from './HPTable'
import HPList from './HPList'


import { createKey } from './Tools'
import { timingSafeEqual } from 'crypto';



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

                case 'HPTextarea':
                    return (
                        <HPTextarea key={key} meta={component} data={data} handleChange={this.props.handleChange}/>
                    );

                case 'HPTable':
                    return (
                        <HPTable key={key} meta={component} data={data} handleChange={this.props.handleChange}/>
                    );

                case 'HPList':
                    return (
                        <HPList key={key} meta={component} />
                    );

            }

        });

        return (
            <div> {renderComponents} </div>
        )
    }

}
