import RegistrationForm from "../../components/visitor/RegistrationForm";
import PhotoUpload from "../../components/visitor/PhotoUpload";
import IDUpload from "../../components/visitor/IDUpload";
import VisitorGuidelines from "../../components/visitor/VisitorGuidelines";

function VisitorRegistration() {
  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Visitor Registration
          </h1>

          <p className="text-gray-500 mt-2">
            Complete the registration before entering the premises.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">

            <RegistrationForm />

          </div>

          <div className="space-y-8">

            <PhotoUpload />

            <IDUpload />

            <VisitorGuidelines />

          </div>

        </div>

      </div>

    </div>
  );
}

export default VisitorRegistration;