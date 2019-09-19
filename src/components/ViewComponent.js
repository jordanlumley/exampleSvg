import React, {
    Component
} from 'react';
import '../App.css';
import $ from 'jquery';

import checklist from '../assets/checklist.svg';
import Snap from 'snapsvg-cjs';

export default class ViewComponent extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var s = Snap("#checklistSVG");
        Snap.load(checklist, function (data){
            s.append(data);

            $(".checkmark").each(function(i) {
                var that = this;
                setTimeout(function () {
                    $(that).addClass('animate');
                }, 1000 * i);
            });
        });
    }  

    render() {
        return (
            <div>
                <svg id="checklistSVG"></svg>
            </div>
        )
    }
}