// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract CharityDonation {

    string public donorName;

    uint public donationAmount;

    event DonationReceived(
        string name,
        uint amount,
        address donor
    );

    function donate(
        string memory _name
    )
        public
        payable
    {

        donorName = _name;

        donationAmount = msg.value;

        emit DonationReceived(
            _name,
            msg.value,
            msg.sender
        );
    }
}
