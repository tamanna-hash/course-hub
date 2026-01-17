import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen dark:bg-gray-900">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-white mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Your privacy is important to us. Learn how we collect, use, and protect your information.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        Last updated: January 17, 2026
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                
                {/* Introduction */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-base-content-90 dark:text-white mb-6">Introduction</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        Welcome to CourseHub. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                        your information when you visit our website and use our services. Please read this privacy policy 
                        carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        We reserve the right to make changes to this Privacy Policy at any time and for any reason. 
                        We will alert you about any changes by updating the "Last updated" date of this Privacy Policy.
                    </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-base-content-90 dark:text-white mb-6">Information We Collect</h2>
                    
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-base-content-90 dark:text-white mb-4">Personal Information</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                            <li>Register for an account</li>
                            <li>Enroll in courses</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Contact us through our contact forms</li>
                            <li>Participate in surveys or promotions</li>
                        </ul>
                        <p className="text-gray-600 dark:text-gray-300 mt-4">
                            This information may include your name, email address, phone number, payment information, 
                            and any other information you choose to provide.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-base-content-90 dark:text-white mb-4">Automatically Collected Information</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            We may automatically collect certain information about your device and usage patterns, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                            <li>IP address and location data</li>
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>Pages visited and time spent on pages</li>
                            <li>Referring website addresses</li>
                            <li>Device identifiers</li>
                        </ul>
                    </div>
                </div>

                {/* How We Use Information */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-base-content-90 dark:text-white mb-6">How We Use Your Information</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                        <li>Providing and maintaining our services</li>
                        <li>Processing course enrollments and payments</li>
                        <li>Sending you course updates and educational content</li>
                        <li>Responding to your inquiries and providing customer support</li>
                        <li>Improving our website and services</li>
                        <li>Personalizing your learning experience</li>
                        <li>Sending marketing communications (with your consent)</li>
                        <li>Detecting and preventing fraud or abuse</li>
                        <li>Complying with legal obligations</li>
                    </ul>
                </div>

                {/* Information Sharing */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-base-content-90 dark:text-white mb-6">Information Sharing and Disclosure</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                        except in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                        <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services</li>
                        <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                        <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
                        <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                    </ul>
                </div>

                {/* Data Security */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-base-content-90 dark:text-white mb-6">Data Security</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We implement appropriate technical and organizational security measures to protect your personal information against 
                        unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                        <li>Encryption of sensitive data</li>
                        <li>Secure server infrastructure</li>
                        <li>Regular security assessments</li>
                        <li>Access controls and authentication</li>
                        <li>Employee training on data protection</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-300 mt-4">
                        However, no method of transmission over the internet or electronic storage is 100% secure. 
                        While we strive to protect your information, we cannot guarantee absolute security.
                    </p>
                </div>

                {/* Your Rights */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-base-content-90 dark:text-white mb-6">Your Privacy Rights</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                        <li><strong>Access:</strong> Request access to your personal information</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                        <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
                        <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                        <li><strong>Restriction:</strong> Request restriction of processing</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-300 mt-4">
                        To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                    </p>
                </div>

                {/* Cookies */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-base-content-90 dark:text-white mb-6">Cookies and Tracking Technologies</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We use cookies and similar tracking technologies to enhance your experience on our website. 
                        Cookies are small data files stored on your device that help us:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                        <li>Remember your preferences and settings</li>
                        <li>Analyze website traffic and usage patterns</li>
                        <li>Provide personalized content and recommendations</li>
                        <li>Improve website functionality and performance</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-300 mt-4">
                        You can control cookie settings through your browser preferences. However, disabling cookies 
                        may affect the functionality of our website.
                    </p>
                </div>

                {/* Third-Party Links */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-base-content-90 dark:text-white mb-6">Third-Party Links</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Our website may contain links to third-party websites. We are not responsible for the privacy 
                        practices or content of these external sites. We encourage you to review the privacy policies 
                        of any third-party websites you visit.
                    </p>
                </div>

                {/* Children's Privacy */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-base-content-90 dark:text-white mb-6">Children's Privacy</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Our services are not intended for children under the age of 13. We do not knowingly collect 
                        personal information from children under 13. If we become aware that we have collected personal 
                        information from a child under 13, we will take steps to delete such information promptly.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-base-content-90 dark:text-white mb-6">Contact Us</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <div className="space-y-2 text-gray-600 dark:text-gray-300">
                            <p><strong>Email:</strong> privacy@coursehub.com</p>
                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p><strong>Address:</strong> 123 Learning Street, Education City, EC 12345</p>
                        </div>
                    </div>
                </div>

                {/* Updates */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">Stay Informed</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        We may update this Privacy Policy from time to time. We will notify you of any material changes 
                        by posting the new Privacy Policy on this page and updating the "Last updated" date.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;