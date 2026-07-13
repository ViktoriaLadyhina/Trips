import '../Skeleton.scss'

export default function SkeletonSidebar({
    items = 5
}) {

    return (
        <aside className="skeleton-sidebar">

            <div className="skeleton-sidebar-title"></div>

            <ul className="skeleton-sidebar-list">

                {Array.from({ length: items }).map((_, index) => (
                    <li key={index}>
                        <div className="skeleton-sidebar-link"></div>
                    </li>
                ))}

            </ul>

        </aside>
    );
}