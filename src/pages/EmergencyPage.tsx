import React from 'react';
import { Phone, Clock, AlertTriangle, Shield } from 'lucide-react';
import { emergencyContacts } from '../data/emergencyContacts';
import { generalFirstAidSteps, whatNotToDo } from '../data/firstAidSteps';
import EmergencyCard from '../components/EmergencyCard';

const EmergencyPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex justify-center items-center w-16 h-16 bg-red-100 rounded-full mb-4 dark:bg-red-900">
            <AlertTriangle size={32} className="text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Snake Bite Emergency Guide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-400">
            Critical information for snake bite emergencies. Follow these steps while seeking medical attention.
          </p>
        </div>
        
        {/* Call to Action - Emergency Banner */}
        <div className="bg-red-600 rounded-lg p-6 mb-10 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Phone size={24} className="mr-3" />
              <div>
                <h2 className="text-xl font-bold">If bitten by a snake, call emergency services immediately!</h2>
                <p className="text-white/90">Do not wait for symptoms to appear. Every minute counts!</p>
              </div>
            </div>
            <a 
              href="tel:911"
              className="px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition shadow-md"
            >
              Call Emergency Services
            </a>
          </div>
        </div>
        
        {/* First Aid Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Snake Bite First Aid Steps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalFirstAidSteps.map((step) => (
              <EmergencyCard
                key={step.step}
                title={`${step.step}. ${step.title}`}
                description={step.description}
                icon={
                  step.icon === "Shield" ? <Shield size={20} /> :
                  step.icon === "Phone" ? <Phone size={20} /> :
                  step.icon === "HandMetal" ? <span>👋</span> :
                  step.icon === "Scissors" ? <span>✂️</span> :
                  step.icon === "Droplets" ? <span>💧</span> :
                  step.icon === "Eye" ? <span>👁️</span> :
                  <Clock size={20} />
                }
              />
            ))}
          </div>
        </section>
        
        {/* What Not To Do */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">What NOT To Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatNotToDo.map((item, index) => (
              <EmergencyCard
                key={index}
                title={item.title}
                description={item.description}
                icon={
                  item.icon === "BanIcon" ? <span>🚫</span> :
                  item.icon === "Scissors" ? <span>✂️</span> :
                  item.icon === "XCircle" ? <span>❌</span> :
                  item.icon === "Snowflake" ? <span>❄️</span> :
                  item.icon === "Coffee" ? <span>☕</span> :
                  item.icon === "Clock" ? <Clock size={20} /> :
                  <AlertTriangle size={20} />
                }
                isWarning={true}
              />
            ))}
          </div>
        </section>
        
        {/* Emergency Contacts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Emergency Contacts by Country</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Country
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Emergency Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Poison Control
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Additional Information
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {emergencyContacts.map((contact, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap font-medium dark:text-white">
                        {contact.country}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap dark:text-gray-300">
                        {contact.emergencyNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap dark:text-gray-300">
                        {contact.poisonControlCenter || "N/A"}
                      </td>
                      <td className="px-6 py-4 dark:text-gray-300">
                        {contact.additionalInfo || "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* Additional Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Additional Information</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Symptoms of Venomous Snake Bites</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Symptoms can vary depending on the snake species, but may include:
            </p>
            
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>Puncture marks at the wound</li>
              <li>Pain and swelling at the bite site</li>
              <li>Redness and bruising</li>
              <li>Nausea and vomiting</li>
              <li>Difficulty breathing</li>
              <li>Disturbed vision</li>
              <li>Increased salivation and sweating</li>
              <li>Numbness or tingling around face and mouth</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Risk Factors</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Certain factors can increase your risk of encountering snakes:
            </p>
            
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Hiking or camping in wilderness areas</li>
              <li>Working outdoors in landscaping, farming, or construction</li>
              <li>Living in rural or wilderness areas</li>
              <li>Keeping snakes as pets</li>
              <li>Attempting to handle or capture snakes</li>
            </ul>
          </div>
        </section>
        
        {/* Prevention Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Snake Bite Prevention</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">In the Wild</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2 flex-shrink-0 dark:bg-emerald-900 dark:text-emerald-400">✓</span>
                  <span>Stay on clear paths and avoid tall grass and underbrush</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2 flex-shrink-0 dark:bg-emerald-900 dark:text-emerald-400">✓</span>
                  <span>Wear sturdy boots and long pants when hiking</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2 flex-shrink-0 dark:bg-emerald-900 dark:text-emerald-400">✓</span>
                  <span>Use a walking stick to prod areas ahead of you</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2 flex-shrink-0 dark:bg-emerald-900 dark:text-emerald-400">✓</span>
                  <span>Be cautious near rocks, logs, and leaf piles</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2 flex-shrink-0 dark:bg-emerald-900 dark:text-emerald-400">✓</span>
                  <span>Carry a flashlight when walking at night</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Around Your Home</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2 flex-shrink-0 dark:bg-emerald-900 dark:text-emerald-400">✓</span>
                  <span>Keep grass short and remove leaf litter and debris</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2 flex-shrink-0 dark:bg-emerald-900 dark:text-emerald-400">✓</span>
                  <span>Store firewood and lumber away from the house</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2 flex-shrink-0 dark:bg-emerald-900 dark:text-emerald-400">✓</span>
                  <span>Seal cracks and gaps in buildings and fences</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2 flex-shrink-0 dark:bg-emerald-900 dark:text-emerald-400">✓</span>
                  <span>Control rodent populations which attract snakes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2 flex-shrink-0 dark:bg-emerald-900 dark:text-emerald-400">✓</span>
                  <span>Check shoes and clothing before wearing, especially if stored in garages or outdoors</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmergencyPage;