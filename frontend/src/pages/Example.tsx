import { Head } from "@inertiajs/react";


// Определяем тип пропсов (если используете TypeScript)
interface ExamplePageProps {
    inertia: boolean; // соответствует props в Django-вью
}

// Компонент страницы
export default function Example({ inertia }: ExamplePageProps) {
    return (
        <div>
            {/* Head позволяет изменять мета-теги (title, description и т. д.) */}
            <Head title="Example Page" />

            <h1>This is an Example Page</h1>
            <p>Inertia.js is working: {inertia ? "✅ Yes" : "❌ No"}</p>
        </div>
    );
}