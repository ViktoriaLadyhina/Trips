import SkeletonRenderer from "../SkeletonRenderer";


export default function SkeletonContent({
    blocks = []
}) {

    return (
        <div className="skeleton-content">
            <SkeletonRenderer blocks={blocks}/>
        </div>
    );
}