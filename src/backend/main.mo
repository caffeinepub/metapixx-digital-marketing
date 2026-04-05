import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Iter "mo:core/Iter";

actor {
  // Type for contact inquiries
  type ContactInquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  // Compare by timestamp, most recent first
  module ContactInquiry {
    public func compare(inquiry1 : ContactInquiry, inquiry2 : ContactInquiry) : Order.Order {
      Int.compare(inquiry2.timestamp, inquiry1.timestamp);
    };
  };

  // Persistent storage for inquiries
  let inquiries = Map.empty<Text, ContactInquiry>();

  // Submit new contact inquiry
  public shared ({ caller }) func submitContactInquiry(name : Text, email : Text, phone : Text, message : Text) : async Text {
    let inquiry : ContactInquiry = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    // Use timestamp as unique id
    let id = inquiry.timestamp.toText();
    inquiries.add(id, inquiry);
    id;
  };

  // Retrieve specific inquiry
  public query ({ caller }) func getContactInquiry(id : Text) : async ContactInquiry {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };

  // Retrieve all inquiries
  public query ({ caller }) func getAllContactInquiries() : async [ContactInquiry] {
    inquiries.values().toArray().sort();
  };

  // Count total inquiries
  public query ({ caller }) func getNextId() : async Nat {
    inquiries.size();
  };
};
