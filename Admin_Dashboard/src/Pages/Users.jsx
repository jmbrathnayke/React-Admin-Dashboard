import { useState } from "react";
import Tabs from "../Components/Ui/Tabs";
import Avatar from "../Components/Ui/Avatar";
import { customerProfile } from "../Data/MockData";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Trash2, 
  Edit, 
  Star, 
  Eye, 
  Plus,
  UserPlus
} from "lucide-react";

const Users = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const profile = customerProfile;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "billing", label: "Billing" },
    { id: "activity", label: "Activity" },
    { id: "notifications", label: "Notifications" },
    { id: "connection", label: "Connection" },
    { id: "security", label: "Security" },
  ];

  const profileDetails = [
    { label: "Full Name:", value: profile.fullName },
    { label: "Surname:", value: profile.surname },
    { label: "Company:", value: profile.company },
    { label: "Date of Birth:", value: profile.dateOfBirth },
    { label: "Mobile Number:", value: profile.mobileNumber },
    { label: "Email Address:", value: profile.email },
    { label: "Location:", value: profile.location },
    { label: "Joining Date:", value: profile.joiningDate },
    { label: "Country:", value: profile.country },
    { label: "Communication:", value: profile.communication },
    { label: "Allow Changes:", value: profile.allowChanges },
    { label: "Website:", value: profile.website, isLink: true },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Customers
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Home &gt; View
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            <Star className="w-4 h-4 text-gray-500" />
          </button>
          <button className="bg-gray-100 flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            <Eye className="w-4 h-4 text-gray-500" />
            Follow
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            Create Customer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.fullName}
                className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
              {profile.fullName}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {profile.email}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-800 dark:text-white">
                {profile.stats.followers}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Followers</p>
            </div>
            <div className="text-center border-x border-blue-100 dark:border-blue-800">
              <p className="text-lg font-bold text-gray-800 dark:text-white">
                {profile.stats.following}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Following</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-800 dark:text-white">
                {profile.stats.engagement}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Engagement</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Location</span>
              <span className="ml-auto text-gray-800 dark:text-white">
                California, USA
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Phone</span>
              <span className="ml-auto text-gray-800 dark:text-white">
                {profile.phone}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Email</span>
              <span className="ml-auto text-gray-800 dark:text-white">
                {profile.email}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="bg-gray-100 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          {/* Tabs */}
          <div className="px-6 pt-4">
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Profile About */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Profile About:
                    </h3>
                    <button className="bg-gray-100 px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                      Updates
                    </button>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-4">
                    {profile.about.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Profile Details */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Profile Details:
                    </h3>
                    <button className="bg-gray-100 px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                      Edit Profile
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {profileDetails.map((detail, index) => (
                      <div key={index} className="flex">
                        <span className="text-sm text-gray-500 dark:text-gray-400 min-w-35">
                          {detail.label}
                        </span>
                        {detail.isLink ? (
                          <a
                            href={detail.value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <span className="text-sm text-gray-800 dark:text-white">
                            {detail.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab !== "overview" && (
              <div className="flex items-center justify-center h-48 text-gray-500 dark:text-gray-400">
                <p>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} content coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
