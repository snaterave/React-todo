import './TodoLoading.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

function TodoLoading({total}){
    return (
      Array(total).fill(0).map((item) =>
        <li className="TodoSkeleton">
        <div>
          <Skeleton circle width={40} className={`TodoSkeleton-icon-container`}/> 
        </div>
        <div>
          <Skeleton circle width={40} baseColor='#CBCBCB' className={`TodoSkeleton-icon-container TodoSkeleton-deleteIcon`}/> 
        </div>
    </li>
      )
        
    );
  
  }

export { TodoLoading }