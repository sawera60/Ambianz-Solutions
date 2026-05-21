import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import {
  FiSearch,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLayers,
  FiClock,
  FiMessageSquare,
  FiEye,
  FiSliders,
  FiCheckCircle,
  FiChevronDown,
} from "react-icons/fi";
import { authDataContext } from "../../../context/AuthContext.jsx";

const defaultMockQuotes = [
  {
    id: "Q-8021",
    fullName: "Sarah Connor",
    email: "sarah.c@skyline.com",
    phoneNumber: "+44 7911 123456",
    service: "Kitchen",
    location: "Kensington, London",
    message: "Looking for an open-plan kitchen remodel with integrated appliances and a massive marble island. Prefer sleek dark forest green cabinets (fitting the Ambianz palette) combined with soft gold accents. I have a detailed layout drawing I can share.",
    date: "May 20, 2026",
    status: "Pending",
  },
  {
    id: "Q-8022",
    fullName: "Marcus Aurelius",
    email: "marcus.a@philosophy.org",
    phoneNumber: "+44 7911 654321",
    service: "Media Wall",
    location: "Richmond, London",
    message: "Need a custom media wall with floating oak shelves, integrated warm white LED backlighting, and a recessed fireplace unit. Total width of the wall is 4.2 meters. Looking for a premium luxury finish.",
    date: "May 19, 2026",
    status: "Under Review",
  },
  {
    id: "Q-8023",
    fullName: "Elizabeth Bennett",
    email: "lizzy.b@longbourn.net",
    phoneNumber: "+44 7911 789012",
    service: "Wardrobe",
    location: "Bath, Somerset",
    message: "Walk-in wardrobe design request. Need custom drawers, dedicated shoe racks, and premium brass hanging rails. Space is roughly 3.5m x 2.8m. White lacquer finish.",
    date: "May 17, 2026",
    status: "Quoted",
  },
  {
    id: "Q-8024",
    fullName: "Harvey Specter",
    email: "specter@pearsonhardman.com",
    phoneNumber: "+44 7911 345678",
    service: "Cafe Fitout",
    location: "Canary Wharf, London",
    message: "Commercial project: complete fitout for a boutique coffee bar. Requires custom counter, rustic wood paneling, espresso bar layout, and customer banquette seating. Tight timeline before launch next month.",
    date: "May 15, 2026",
    status: "Closed",
  },
  {
    id: "Q-8025",
    fullName: "Sherlock Holmes",
    email: "sherlock@221b.co.uk",
    phoneNumber: "+44 7911 901234",
    service: "Doors",
    location: "Baker St, London",
    message: "Need 6 custom internal solid core doors with minimalist matte black ironmongery, plus 1 heavy external wood door with bespoke vertical panels. Oak veneer finish preferred.",
    date: "May 12, 2026",
    status: "Pending",
  },
];

export default function QuotesRequest() {
  const { serverUrl } = useContext(authDataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [quotes, setQuotes] = useState(defaultMockQuotes);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadQuotes = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.get(`${serverUrl}/api/quote`);
      if (response.data?.success) {
        const formatted = response.data.quotes.map((quote) => ({
          id: quote._id,
          fullName: quote.fullName,
          email: quote.email,
          phoneNumber: quote.phoneNumber,
          service: quote.service,
          location: quote.location,
          message: quote.message,
          date: new Date(quote.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
          status: "Pending",
        }));
        setQuotes(formatted);
      } else {
        setErrorMessage("Failed to load quote requests.");
      }
    } catch {
      setErrorMessage("Unable to fetch quote requests from backend.");
    } finally {
      setIsLoading(false);
    }
  }, [serverUrl]);

  useEffect(() => {
    loadQuotes();
  }, [loadQuotes]);

  // Update status handler
  const handleStatusChange = (id, newStatus) => {
    setQuotes(
      quotes.map((q) => (q.id === id ? { ...q, status: newStatus } : q))
    );
    if (selectedQuote && selectedQuote.id === id) {
      setSelectedQuote({ ...selectedQuote, status: newStatus });
    }
  };

  // Get status badge colors
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "Under Review":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "Quoted":
        return "bg-[#3c5a25]/10 text-[#3c5a25] border-[#3c5a25]/20";
      case "Closed":
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Filter logic
  const filteredQuotes = quotes.filter((quote) => {
    const matchesSearch =
      quote.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.id.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === "All" || quote.status === statusFilter;
    const matchesService = serviceFilter === "All" || quote.service === serviceFilter;

    return matchesSearch && matchesStatus && matchesService;
  });

  return (
    <div className="space-y-6 animate-fadeIn duration-300">
      
      {/* Controls Bar */}
      <div className="bg-white p-6 border border-[#e0ddd5] flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="SEARCH BY NAME, EMAIL OR ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-[#e0ddd5] focus:border-[#3c5a25] focus:outline-none font-raleway text-[10px] tracking-widest text-[#1A1C19] bg-transparent"
          />
        </div>

        {/* Filters Selectors */}
        <div className="flex flex-wrap gap-4 items-center">
          
          {/* Service Filter */}
          <div className="relative flex items-center bg-[#F8F6F1] border border-[#e0ddd5]">
            <FiLayers className="text-gray-400 text-xs ml-3 pointer-events-none" />
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="pl-2 pr-8 py-2.5 outline-none font-raleway text-[9px] tracking-widest text-[#1A1C19] bg-transparent cursor-pointer font-bold uppercase appearance-none"
            >
              <option value="All">ALL SERVICES</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Doors">Doors</option>
              <option value="Wardrobe">Wardrobe</option>
              <option value="Media Wall">Media Wall</option>
              <option value="Cafe Fitout">Cafe Fitout</option>
            </select>
            <FiChevronDown className="absolute right-2 pointer-events-none text-gray-400 text-[10px]" />
          </div>

          {/* Status Filter */}
          <div className="relative flex items-center bg-[#F8F6F1] border border-[#e0ddd5]">
            <FiSliders className="text-gray-400 text-xs ml-3 pointer-events-none" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-2 pr-8 py-2.5 outline-none font-raleway text-[9px] tracking-widest text-[#1A1C19] bg-transparent cursor-pointer font-bold uppercase appearance-none"
            >
              <option value="All">ALL STATUSES</option>
              <option value="Pending">Pending</option>
              <option value="Under Review">Under Review</option>
              <option value="Quoted">Quoted</option>
              <option value="Closed">Closed</option>
            </select>
            <FiChevronDown className="absolute right-2 pointer-events-none text-gray-400 text-[10px]" />
          </div>

        </div>

      </div>

      {isLoading && (
        <div className="bg-white border border-[#e0ddd5] p-6 text-center font-raleway text-xs text-gray-500">
          Loading quote inquiries...
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 text-[10px] font-raleway uppercase tracking-[2px]">
          {errorMessage}
        </div>
      )}

      {/* Main Table Grid */}
      <div className="bg-white border border-[#e0ddd5] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8F6F1] border-b border-[#e0ddd5]">
                <th className="p-5 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase w-24">
                  ID
                </th>
                <th className="p-5 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">
                  Client Info
                </th>
                <th className="p-5 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">
                  Design Service
                </th>
                <th className="p-5 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">
                  Location
                </th>
                <th className="p-5 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">
                  Submit Date
                </th>
                <th className="p-5 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase w-40">
                  Status
                </th>
                <th className="p-5 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase w-28 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e0ddd5]">
              {filteredQuotes.length > 0 ? (
                filteredQuotes.map((quote) => (
                  <tr
                    key={quote.id}
                    className="hover:bg-[#F8F6F1]/30 transition-colors duration-150"
                  >
                    {/* ID */}
                    <td className="p-5 font-raleway text-xs text-gray-500 font-semibold">
                      {quote.id}
                    </td>

                    {/* Client Info */}
                    <td className="p-5">
                      <div className="flex flex-col">
                        <span className="font-raleway text-xs font-bold text-[#1A1C19]">
                          {quote.fullName}
                        </span>
                        <span className="font-raleway text-[10px] text-gray-400 flex items-center gap-1.5 mt-1">
                          <FiMail className="shrink-0 text-gray-300" />
                          {quote.email}
                        </span>
                        <span className="font-raleway text-[10px] text-gray-400 flex items-center gap-1.5 mt-0.5">
                          <FiPhone className="shrink-0 text-gray-300" />
                          {quote.phoneNumber}
                        </span>
                      </div>
                    </td>

                    {/* Design Service */}
                    <td className="p-5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#3c5a25]/5 border border-[#3c5a25]/15 text-[#3c5a25] font-raleway text-[10px] tracking-wider uppercase font-bold">
                        <span className="w-1.5 h-1.5 bg-[#3c5a25] rounded-full inline-block" />
                        {quote.service}
                      </span>
                    </td>

                    {/* Location */}
                    <td className="p-5 font-raleway text-xs text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <FiMapPin className="text-gray-400 shrink-0" size={13} />
                        <span>{quote.location}</span>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="p-5 font-raleway text-xs text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <FiClock className="text-gray-400 shrink-0" size={13} />
                        <span>{quote.date}</span>
                      </div>
                    </td>

                    {/* Status Select Badge */}
                    <td className="p-5">
                      <div className="relative group/status inline-block">
                        <select
                          value={quote.status}
                          onChange={(e) => handleStatusChange(quote.id, e.target.value)}
                          className={`appearance-none pl-3 pr-8 py-1.5 text-[9px] tracking-widest font-raleway font-bold uppercase border cursor-pointer transition-colors duration-200 outline-none ${getStatusColor(
                            quote.status
                          )}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Under Review">Under Review</option>
                          <option value="Quoted">Quoted</option>
                          <option value="Closed">Closed</option>
                        </select>
                        <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 text-[10px] pointer-events-none" />
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="p-5 text-right">
                      <button
                        onClick={() => setSelectedQuote(quote)}
                        className="bg-white border border-[#e0ddd5] hover:border-[#3c5a25] hover:bg-[#3c5a25] hover:text-white p-2 text-gray-600 transition-all duration-300"
                        title="View Details"
                      >
                        <FiEye size={14} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="p-10 text-center font-raleway text-xs text-gray-400 tracking-wider">
                    NO QUOTE INQUIRIES FOUND MATCHING FILTER CRITERIA
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quote Detail Drawer Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedQuote(null)}
          />

          {/* Drawer Body */}
          <div className="relative bg-white w-full max-w-2xl border border-[#e0ddd5] shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh] animate-slideIn">
            
            {/* Header info */}
            <div className="flex justify-between items-start border-b border-gray-100 pb-5 mb-5">
              <div>
                <span className="font-raleway text-[9px] tracking-[2px] text-gray-400 font-bold uppercase">
                  QUOTE REQUEST DETAILS
                </span>
                <h3 className="font-cinzel text-lg font-bold text-[#1A1C19] tracking-wide mt-1">
                  Inquiry: {selectedQuote.id}
                </h3>
              </div>
              <button
                onClick={() => setSelectedQuote(null)}
                className="text-[#1A1C19]/55 hover:text-[#1A1C19] p-1.5 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Quick Status Bar */}
            <div className="bg-[#F8F6F1] p-4 border border-[#e0ddd5] flex flex-wrap justify-between items-center gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <FiClock className="text-gray-400 text-sm" />
                <span className="font-raleway text-xs text-gray-500 font-medium">Submitted on: <span className="font-bold text-gray-700">{selectedQuote.date}</span></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-raleway text-[10px] tracking-wider font-bold text-gray-400 uppercase">UPDATE STATUS:</span>
                <div className="relative">
                  <select
                    value={selectedQuote.status}
                    onChange={(e) => handleStatusChange(selectedQuote.id, e.target.value)}
                    className={`appearance-none pl-3 pr-8 py-1.5 text-[9px] tracking-widest font-raleway font-bold uppercase border cursor-pointer outline-none ${getStatusColor(
                      selectedQuote.status
                    )}`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Quoted">Quoted</option>
                    <option value="Closed">Closed</option>
                  </select>
                  <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 text-[10px] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Grid detail inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* Left Column Client details */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-1">CLIENT NAME</h4>
                  <p className="font-cinzel text-xs font-bold text-[#3c5a25] tracking-wide">{selectedQuote.fullName}</p>
                </div>
                <div>
                  <h4 className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-1">EMAIL ADDRESS</h4>
                  <a href={`mailto:${selectedQuote.email}`} className="font-raleway text-xs text-[#1A1C19] hover:text-[#3c5a25] transition-colors font-medium flex items-center gap-2">
                    <FiMail className="text-gray-400" />
                    {selectedQuote.email}
                  </a>
                </div>
                <div>
                  <h4 className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-1">PHONE NUMBER</h4>
                  <a href={`tel:${selectedQuote.phoneNumber}`} className="font-raleway text-xs text-[#1A1C19] hover:text-[#3c5a25] transition-colors font-medium flex items-center gap-2">
                    <FiPhone className="text-gray-400" />
                    {selectedQuote.phoneNumber}
                  </a>
                </div>
              </div>

              {/* Right Column Project Details */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-1">SERVICE REQUESTED</h4>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#3c5a25]/5 border border-[#3c5a25]/15 text-[#3c5a25] font-raleway text-[10px] tracking-wider uppercase font-bold mt-0.5">
                    {selectedQuote.service}
                  </span>
                </div>
                <div>
                  <h4 className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-1">PROJECT SITE LOCATION</h4>
                  <p className="font-raleway text-xs text-gray-700 font-medium flex items-center gap-2">
                    <FiMapPin className="text-[#3c5a25]" />
                    {selectedQuote.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Client message / scope section */}
            <div className="border-t border-gray-100 pt-5 mb-6">
              <h4 className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-2 flex items-center gap-2">
                <FiMessageSquare className="text-gray-400" />
                PROJECT DESCRIPTION / CLIENT NOTES
              </h4>
              <div className="bg-[#F8F6F1]/55 border border-[#e0ddd5] p-5 rounded-sm">
                <p className="font-raleway text-xs text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                  {selectedQuote.message}
                </p>
              </div>
            </div>

            {/* Admin Response/Follow-up Section */}
            <div className="border-t border-gray-100 pt-5 mb-8">
              <h4 className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-3 flex items-center gap-2">
                <FiCheckCircle className="text-[#3c5a25]" />
                ADMIN FOLLOW-UP ACTION
              </h4>
              <textarea
                rows={3}
                placeholder="WRITE INTERNAL REMARK OR QUOTE ESTIMATION NOTES HERE..."
                className="w-full p-4 border border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-xs text-gray-700 bg-transparent resize-none leading-relaxed"
              />
            </div>

            {/* Actions Bar */}
            <div className="flex gap-4 border-t border-gray-100 pt-5 justify-end">
              <button
                onClick={() => setSelectedQuote(null)}
                className="px-6 py-3 border border-[#e0ddd5] text-[10px] font-raleway font-bold uppercase tracking-[2px] hover:bg-gray-50 transition-colors duration-200"
              >
                Close View
              </button>
              <a
                href={`mailto:${selectedQuote.email}?subject=Quote Request Response - Ambianz Solutions`}
                className="px-6 py-3 bg-[#3c5a25] hover:bg-[#2a3f1a] text-white text-[10px] font-raleway font-bold uppercase tracking-[2px] transition-colors duration-200 flex items-center gap-2 shadow-lg shadow-[#3c5a25]/15"
              >
                <FiMail size={13} />
                Send Email Reply
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
