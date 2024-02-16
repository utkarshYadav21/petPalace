module.exports.donate_post = async (req, res) => {
  try {
    const donationUrl="https://buy.stripe.com/test_dR66q7aridSAdXOfYY";
    res.send({donationUrl});
  } catch (e) {
    console.error("Error creating checkout session:", e);
    res.status(500).json({ error: e.message });
  }
};
