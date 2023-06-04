import ComputerCard from "../../common/components/ComputerCard/ComputerCard";

import { observer } from "mobx-react";

const ComputersPage = observer(() => {
   // const getAllComputer = (projectId = params.id) => {
   //     void works.resetStore()
    
   //     void works.getProjectsList(projectId)
   //   }
    
    return (
        <div>ComputersPage
            <div className = "computer-list">
                <ComputerCard/>
                <ComputerCard/>
            </div> 
        </div>
    )
});

export default ComputersPage;