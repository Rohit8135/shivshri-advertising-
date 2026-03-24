from flask import Flask, jsonify, render_template, request

import os

app = Flask(__name__)


SITE_DATA = {
    "business_name": "Shivshri Advertising",
    "tagline": "All Types of Printing Solutions",
    "owners": "Sumeet Mungase & Santosh Solanke",
    "phone_numbers": [
        {"display": "+91 7410101704", "link": "+917410101704"},
        {"display": "+91 9373521539", "link": "+919373521539"},
    ],
    "primary_phone_display": "+91 7410101704",
    "phone_link": "+917410101704",
    "whatsapp_link": "https://wa.me/917410101704",
    "email": "shivashree.advertisment@gmail.com",
    "working_hours": "10 AM - 10 PM",
    "address": "Alandi Devachi, 412105",
    "instagram_link": "https://www.instagram.com/",
    "directions_link": "https://maps.app.goo.gl/tDPyYc8HCygDiggr8?g_st=iw",
    "google_maps_embed": "https://www.google.com/maps?q=Alandi%20Devachi%20412105&z=14&output=embed",
    "services": [
        {
            "icon": "fa-solid fa-print",
            "title": "Flex Printing",
            "description": "High-quality banners in all sizes.",
        },
        {
            "icon": "fa-solid fa-star",
            "title": "Star Printing",
            "description": "Durable and attractive prints.",
        },
        {
            "icon": "fa-solid fa-layer-group",
            "title": "Vinyl Printing",
            "description": "Premium finish and long-lasting.",
        },
        {
            "icon": "fa-solid fa-pen-ruler",
            "title": "Banner Design",
            "description": "Custom creative designs.",
        },
        {
            "icon": "fa-solid fa-hashtag",
            "title": "Social Media Design",
            "description": "Digital promotional creatives.",
        },
        {
            "icon": "fa-solid fa-lightbulb",
            "title": "Backlight Boards",
            "description": "Bright and eye-catching boards.",
        },
    ],
    "portfolio_items": [
        {"title": "Retail Flex Banner", "category": "flex", "image": "images/portfolio-flex.jpg"},
        {"title": "Event Backdrop", "category": "banner", "image": "images/portfolio-backdrop.png"},
        {"title": "Vinyl Window Graphic", "category": "vinyl", "image": "images/portfolio-vinyl.jpg"},
        {"title": "Menu Light Board", "category": "board", "image": "images/portfolio-lightboard.png"},
        {"title": "Instagram Campaign Set", "category": "social", "image": "images/portfolio-social.jpeg"},
        {"title": "Festival Hoarding", "category": "flex", "image": "images/portfolio-hoarding.png"},
    ],
    "testimonials": [
        {
            "name": "Local Business Owner",
            "rating": 5,
            "text": "Best printing service in Alandi, fast and reliable",
        },
        {
            "name": "Shop Owner",
            "rating": 5,
            "text": "Very good quality and affordable price",
        },
        {
            "name": "Event Organizer",
            "rating": 5,
            "text": "Highly recommended for banner and flex printing",
        },
    ],
    "instagram_posts": [
        "images/insta-1.jpg",
        "images/insta-2.jpg",
        "images/insta-3.jpg",
        "images/insta-4.jpg",
    ],
}


@app.context_processor
def inject_site_data():
    return {"site": SITE_DATA}


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/services")
def services():
    return render_template("services.html")


@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.post("/contact")
def submit_contact():
    data = request.get_json(silent=True) or request.form
    name = data.get("name", "").strip()
    phone = data.get("phone", "").strip()
    message = data.get("message", "").strip()

    print("Contact Enquiry:", {"name": name, "phone": phone, "message": message})

    if not name or not phone or not message:
        return jsonify({"success": False, "message": "Please fill in all fields."}), 400

    return jsonify(
        {
            "success": True,
            "message": "Thanks for contacting Shivshri Advertising. We will reach out shortly.",
        }
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=False)





