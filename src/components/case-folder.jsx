import { useAuth } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CaseFolder = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="title">Case Folder</h2>
                <p className="text-sm text-gray-500">Manage all case category here.</p>
            </div>

            {/* Back Button */}
            <button
                onClick={() => navigate("/cases")}
                className="flex items-center gap-2 rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-800"
            >
                <ArrowLeft size={16} />
                Back to Cases
            </button>
        </div>
    );
};

export default CaseFolder;
