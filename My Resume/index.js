// Author - Rahul Choudhary

// EMAIL FUNCTION
function openEmail(e) {
    e.preventDefault();

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const subject = "Job Opportunity";
    const body = `Hello Rahul Choudhary,

I am [HR Name] from [Company Name].
We are interested in discussing a job opportunity with you.

Please let us know a suitable time to connect.

Best regards,
[HR Name]`;

    if (isMobile) {
        // Mobile → Mail App
        window.location.href =
            `mailto:rahulchoudhary1715@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
        // Desktop → Gmail
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=rahulchoudhary1715@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
            "_blank",
            "noopener,noreferrer"
        );
    }
}

// CALL / WHATSAPP FUNCTION
function makeCall(e) {
    e.preventDefault();

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const phoneNumber = "918107199593"; // without + for WhatsApp
    const message = "Hello Rahul Choudhary, I would like to connect with you.";

    if (isMobile) {
        // Mobile → WhatsApp
        window.location.href =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Fallback → Phone Call
        setTimeout(() => {
            window.location.href = `tel:+${phoneNumber}`;
        }, 1500);
    } else {
        // Desktop → WhatsApp Web
        const openWeb = confirm("Open WhatsApp Web to send a message?");
        if (openWeb) {
            window.open(
                `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`,
                "_blank",
                "noopener,noreferrer"
            );
        } else {
            alert(`Please call or message: +91 81071 99593`);
        }
    }
}
