import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteTechs } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({tech, deleteTechs}) => {

    const onDelete = () => {
        deleteTechs(tech.id);
        M.toast({html: 'Tech deleted'});

    }
    return (
        <li className="collection-item">
           <div>
               {tech.firstName} {tech.lastName}
               <a href="#!" onClick={onDelete} className="secondary-content">
                   <i className="material-icons grey-text">delete</i>
               </a>
            </div> 
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTechs: PropTypes.func.isRequired,
}

export default connect(null, { deleteTechs })(TechItem)
