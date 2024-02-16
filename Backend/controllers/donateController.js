module.exports.donate_post = async (req, res) => {
  try {
    const donationUrl="PUT YOUR OWN STRIPE DONATION URL";
    res.send({donationUrl});
  } catch (e) {
    console.error("Error creating checkout session:", e);
    res.status(500).json({ error: e.message });
  }
};
